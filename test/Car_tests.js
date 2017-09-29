'use strict'

var expect = require('chai').expect
var Car = require('../Car')

describe('car class', function () {
  it('new car', function () {
    var mondeo = new Car(0)

    expect(mondeo.fuel).to.equal(0)
  })
  it('add fuel', function () {
    var mondeo = new Car()

    mondeo.addFuel(40)
    expect(mondeo.fuel).to.equal(40)

    mondeo.addFuel(25)
    expect(mondeo.fuel).to.equal(65)

    var fiesta = new Car(0)

    fiesta.addFuel(25)
    expect(fiesta.fuel).to.equal(25)
  })
  it('drive car', function () {
    var mondeo = new Car()
    mondeo.addFuel(200)   

    expect(mondeo.odometer).to.equal(0)

    mondeo.driveCar(50)
    expect(mondeo.fuel).to.equal(100)
    expect(mondeo.odometer).to.equal(50)

    mondeo.driveCar(25)
    expect(mondeo.fuel).to.equal(50)
    expect(mondeo.odometer).to.equal(75)
  })
  it('car due service', function() {
    var mondeo = new Car(0)

    expect(mondeo.isServiceDue()).to.be.false

    mondeo.addFuel(1000)
    mondeo.driveCar(1000)

    expect(mondeo.isServiceDue()).to.be.true

    mondeo.carryoutService()
    expect(mondeo.isServiceDue()).to.be.false
  })
  it('***BONUS STAR PUPIL TEST*** ;-) - new car with fuel', function() {
    var mondeo = new Car(15)

    expect(mondeo.fuel).to.equal(15)
  })
})
