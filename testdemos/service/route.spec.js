const superagent = require('supertest');
const app=require('./app');
function request(){
    return superagent(app.listen());
}
 describe("node接口测试",function(){
     it("test 接口测试",function(){
            request().get("/data")
            .expect("Content-Type",/json/)
            .expect(200)
            .end(function(err,res){
                if(res.data=='hello world'){
                    console.log('success');
                    
                }else{
                    console.log(err);
                }
            })
     });
 })
