import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProblemService }  from '../problem.service';
import { ProblemDetail } from '../problemDetail';
import { DomSanitizer } from '@angular/platform-browser';
import { SubmitCode } from '../model/submit/submit-code';
import { JudgeStatus } from '../model/submit/judge-status';
import { User } from '../model/User';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProblemComponent implements OnInit {
  problemDetail: ProblemDetail;
  problemInputDescription: any;
  problemOutputDescription: any;
  problemHint: any;
  problemDescription: any;
  samples: JSON;
  judgeStatus: JudgeStatus
  intervalCode: number
  iconType: number
  statusMessageClass: string
  createBy: User
  

  constructor(
    private route: ActivatedRoute,
    private problemService: ProblemService,
    private location: Location,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.problemService.getProblemDetail(id)
      .subscribe(result => {
        this.problemDetail = result.data;
        this.problemInputDescription = this.sanitizer.bypassSecurityTrustHtml(this.problemDetail.inputDescription);
        this.problemOutputDescription = this.sanitizer.bypassSecurityTrustHtml(this.problemDetail.outputDescription);
        this.problemHint = this.sanitizer.bypassSecurityTrustHtml(this.problemDetail.hint);
        this.problemDescription = this.sanitizer.bypassSecurityTrustHtml(this.problemDetail.description);
        this.samples = JSON.parse(this.problemDetail.samples.replace("\n", "\\r\\n"))
      });
  }

  onSubmit(submitCode: SubmitCode) {
    // console.log(submitCode)
    this.iconType = 0
    this.statusMessageClass = "normal"
    if (this.judgeStatus) this.judgeStatus.judgeStatusResult = "submit"
    this.problemService.submitCode(submitCode)
      .subscribe(result => {
        this.judgeStatus = result.data
        console.log(this.judgeStatus)
        this.iconType = 0
        this.queryJudgeStatus()
      })

    
  }

  queryJudgeStatus() {
    if (this.judgeStatus) {
      this.problemService.getJudgeStatus(this.judgeStatus.id).subscribe(result => {
        this.judgeStatus = result.data
        console.log(this.judgeStatus)
        if (this.judgeStatus.judgeStatusCode == 0) {
          this.queryJudgeStatus();
        } else if (this.judgeStatus.judgeStatusCode == 7) {
          this.statusMessageClass = "accept"
          this.iconType = 1
        } else {
          this.statusMessageClass = "reject"
          this.iconType = 2
        }
      })
    } else {
      this.queryJudgeStatus();
    }
  }
}
