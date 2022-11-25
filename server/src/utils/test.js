const chai = require("chai");
const chaiHtpp = require("chai-http");
const server = require("../../app");

// Assertion Style
chai.should();
chai.use(chaiHtpp);


    describe('/GET countDown route status', () => {
        it('it should GET the countdown page status', (done) => {
            chai.request(server)
                .get('/api/v1/countdown/christmas')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                done();

            });
        })
        return;
    });


