
export module Home {
    
    export const moduleName = "app.home";

    @at.controller( moduleName, 'HomeController')
    @at.inject( '$router')
    class HomeController {


    constructor(private router:any ) {
        console.log("childRouter", router);
    }

    }
 
}


