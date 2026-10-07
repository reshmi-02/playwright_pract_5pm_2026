import type { FullConfig ,FullResult,Reporter,Suite,TestCase,TestResult} from "@playwright/test/reporter";


class MyReport implements Reporter {

    onBegin(config: FullConfig, suite: Suite): void {
        console.log(`starting the test suite with ${suite.allTests().length} test`);   
    }


    onTestBegin(test: TestCase, result: TestResult): void {
        console.log(`starting test ${test.title}`);
    }


    onTestEnd(test: TestCase, result: TestResult): void {
        console.log(`Finished test ${test.title} : ${result.status}`);   
    }

    onEnd(result: FullResult){
        console.log(`Finished all test suite : ${result.status}`);
        
    }

} 


export default MyReport