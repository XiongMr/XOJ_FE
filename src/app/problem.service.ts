import { Injectable } from '@angular/core';
import { ProblemIntro } from "./problemIntro";
import { ProblemDetail } from "./problemDetail";
import { Observable, of } from 'rxjs';

const problemIntros: ProblemIntro[] = [
  {id: 1000, title: "A+B problem", submit: 11, accept: 2},
  {id: 1001, title: "test1", submit: 10, accept: 2},
  {id: 1002, title: "test2", submit: 10, accept: 0},
  {id: 1003, title: "test3", submit: 0, accept: 0},
];

const problemDetails: ProblemDetail[] = [
  {id: 1000, title: "A+B problem", description: "<p>请计算两个整数的和并输出结果。</p><p>注意不要有不必要的输出，比如&quot;请输入 a 和 b 的值: &quot;，示例代码见隐藏部分。</p>", inputDescription: "<p>两个用空格分开的整数.</p>", outputDescription: "<p>两数之和</p>", samples: '[{"input": "1 1", "output": "2"},{"input": "2 1", "output": "3"},{"input": "2 2", "output": "4"}]', hint: '<p>C 语言实现:</p><pre><code class="lang-c++">#include &lt;stdio.h&gt;    \nint main(){\n    int a, b;\n    scanf(&quot;%d%d&quot;, &a, &b);\n    printf(&quot;%d\\n&quot;, a+b);\n    return 0;\n}</code></pre><p>Java 实现:</p><pre><code class="lang-java">import java.util.Scanner;\npublic class Main{\n    public static void main(String[] args){\n        Scanner in=new Scanner(System.in);\n        int a=in.nextInt();\n        int b=in.nextInt();\n        System.out.println((a+b));  \n    }\n}</code></pre>' ,submit: 11, accept: 2, createTime:"2015-09-02T13:02:26Z", createBy: "XiongXuan", ioMode: 'input: "input.txt", output: "output.txt", io_mode: "Standard IO"', testcaseCount: 5, timeLimit: 1000, memoryLimit: 128},
  {id: 1001, title: "test1", description: "<p>请计算两个整数的和并输出结果。</p><p>注意不要有不必要的输出，比如&quot;请输入 a 和 b 的值: &quot;，示例代码见隐藏部分。</p>", inputDescription: "<p>两个用空格分开的整数.</p>", outputDescription: "<p>两数之和</p>", samples: '[{"input": "1 1", "output": "2"}]', hint: '<p>C 语言实现:</p><pre><code class="lang-c++">#include &lt;stdio.h&gt;    \nint main(){\n    int a, b;\n    scanf(&quot;%d%d&quot;, &a, &b);\n    printf(&quot;%d\n&quot;, a+b);\n    return 0;\n}</code></pre><p>Java 实现:</p><pre><code class="lang-java">import java.util.Scanner;\npublic class Main{\n    public static void main(String[] args){\n        Scanner in=new Scanner(System.in);\n        int a=in.nextInt();\n        int b=in.nextInt();\n        System.out.println((a+b));  \n    }\n}</code></pre>' ,submit: 11, accept: 2, createTime:"2015-09-02T13:02:26Z", createBy: "XiongXuan", ioMode: 'input: "input.txt", output: "output.txt", io_mode: "Standard IO"', testcaseCount: 5, timeLimit: 1000, memoryLimit: 128},
  {id: 1002, title: "test2", description: "<p>请计算两个整数的和并输出结果。</p><p>注意不要有不必要的输出，比如&quot;请输入 a 和 b 的值: &quot;，示例代码见隐藏部分。</p>", inputDescription: "<p>两个用空格分开的整数.</p>", outputDescription: "<p>两数之和</p>", samples: '[{"input": "1 1", "output": "2"}]', hint: '<p>C 语言实现:</p><pre><code class="lang-c++">#include &lt;stdio.h&gt;    \nint main(){\n    int a, b;\n    scanf(&quot;%d%d&quot;, &a, &b);\n    printf(&quot;%d\n&quot;, a+b);\n    return 0;\n}</code></pre><p>Java 实现:</p><pre><code class="lang-java">import java.util.Scanner;\npublic class Main{\n    public static void main(String[] args){\n        Scanner in=new Scanner(System.in);\n        int a=in.nextInt();\n        int b=in.nextInt();\n        System.out.println((a+b));  \n    }\n}</code></pre>' ,submit: 11, accept: 2, createTime:"2015-09-02T13:02:26Z", createBy: "XiongXuan", ioMode: 'input: "input.txt", output: "output.txt", io_mode: "Standard IO"', testcaseCount: 5, timeLimit: 1000, memoryLimit: 128},
  {id: 1003, title: "test3", description: "<p>请计算两个整数的和并输出结果。</p><p>注意不要有不必要的输出，比如&quot;请输入 a 和 b 的值: &quot;，示例代码见隐藏部分。</p>", inputDescription: "<p>两个用空格分开的整数.</p>", outputDescription: "<p>两数之和</p>", samples: '[{"input": "1 1", "output": "2"}]', hint: '<p>C 语言实现:</p><pre><code class="lang-c++">#include &lt;stdio.h&gt;    \nint main(){\n    int a, b;\n    scanf(&quot;%d%d&quot;, &a, &b);\n    printf(&quot;%d\n&quot;, a+b);\n    return 0;\n}</code></pre><p>Java 实现:</p><pre><code class="lang-java">import java.util.Scanner;\npublic class Main{\n    public static void main(String[] args){\n        Scanner in=new Scanner(System.in);\n        int a=in.nextInt();\n        int b=in.nextInt();\n        System.out.println((a+b));  \n    }\n}</code></pre>' ,submit: 11, accept: 2, createTime:"2015-09-02T13:02:26Z", createBy: "XiongXuan", ioMode: 'input: "input.txt", output: "output.txt", io_mode: "Standard IO"', testcaseCount: 5, timeLimit: 1000, memoryLimit: 128},

];

@Injectable({
  providedIn: 'root'
})

export class ProblemService {

  constructor() { }

  getProblemIntros(): Observable<ProblemIntro[]> {
    return of(problemIntros);
  }

  getProblemDetail(id: number): Observable<ProblemDetail> {
    return of(problemDetails.find(problemDetail => problemDetail.id === id))
  }
}