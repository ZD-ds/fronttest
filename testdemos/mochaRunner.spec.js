const Mocha=require("mocha");
var mocha=new Mocha({
    reporter:'mochawesome',
    reporterOptions:{
        reporterDir:"./reports/mochawesome-reporter"
    }
   
});
mocha.addFile('./service/route.spec.js');
mocha.run(function(){
    console.log("done");
    process.exit();
});