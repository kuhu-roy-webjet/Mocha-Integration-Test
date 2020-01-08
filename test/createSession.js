var chai=require('chai'),
chaiHttp=require('chai-http');
var expect=chai.expect;
 
chai.use(chaiHttp);
 
describe('Create Session', function(){
 
it('should return session token',function(){
chai.request('https://apidev.au.poweredbycovermore.com/')
        .post('v2/sessions/create')
        .set('Content-Type','application/json')
        .set('X-API-KEY','webjetau-in')
        .send({affiliateCode:'WJV0001'})
        .then(function(res){
          console.log(res.body)
expect(res.body).to.have.property("sessionToken").not.equal(null);

        })
 
   })

})
 