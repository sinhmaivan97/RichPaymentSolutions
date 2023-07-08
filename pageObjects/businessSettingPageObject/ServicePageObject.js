class ServicePageObject{
    constructor(page){
        this.page = page();
    }
}

module.exports = {ServicePageObject};