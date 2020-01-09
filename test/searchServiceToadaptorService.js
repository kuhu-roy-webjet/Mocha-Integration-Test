let chai=require('chai');
let chaiHttp=require('chai-http');
let expect=chai.expect;
 
chai.use(chaiHttp);
 
describe('Interaction between Insurance Search Service and Adaptor Service', function(){
 
it('should return correct response',function(){
return chai.request('https://services.dev.webjet.com.au/')
        .post('api/insurance/covermoreadaptor/offer')
        .set('Content-Type','application/json')
        .set('X-ApiKey','2AA51A4CD65BEB3E4619A9258934B')
        .set('Session-Id','123')
        .send({fromDate:'2020-02-13T16:45:00'})
        .send({toDate:'2020-02-20T16:45:00'})
        .send({departureAirportCodes:['MEL']})
        .send({destinationAirportCodes:['SYD']})
        .send({tripCost:194.38})
        .send({numberOfAdults:2})
        .send({numberOfChildren:1})
        .send({numberOfInfants:1})
        .send({tripType:'oneway'})
        .send({offerToken:''})
        .send({clientUserAgent:null})


        .then(function(res){
        console.log(res.body)      
      //console.log(res.body.data.offers)
expect(res.body.data).to.have.property("geoCategory").equal('Domestic');
expect(res.body.data).to.have.property("offerType").equal('SIGLE');
expect(res.body.data).to.have.property("currency").equal('AUD');

        })
 
   })

})
 