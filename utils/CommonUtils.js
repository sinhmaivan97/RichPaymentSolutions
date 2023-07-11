class CommonUtils {

    async waitForSomeTime(timeInSeconds) {
        console.log('Additional Wait for ' + timeInSeconds + ' seconds.');
        await new Promise(resolve => setTimeout(resolve, (timeInSeconds * 1000)));
    }

    async serverDEV() {
        console.log('Move developer to server');
        await this.page.goto('https://business-settings.devrpay.com/checkout');
    }

    async serverSTAG() {
        console.log('Move stagging to server');
        await this.page.goto('https://business-settings.stage.devrpay.com/checkout');
    }

    async serverPRO() {
        console.log('Move production to server');
        await this.page.goto('https://app.getrichpos.com/checkout');
    }
}//class

module.exports = { CommonUtils };