var expect = chai.expect;

describe('isVowel()', function() {
  it('should be a function', function() {
    return expect(isVowel).to.be.a('function');
  });

  describe('BASIC: function should handle lower case letters', function(){
    it(`isVowel('a') should return TRUE`, function(){
      return expect(isVowel('a')).to.equal(true)
    })

    it(`isVowel('b') should return FALSE`, function(){
      return expect(isVowel('b')).to.equal(false)
    })

    it(`isVowel('e') should return TRUE`, function(){
      return expect(isVowel('e')).to.equal(true)
    })

    it(`isVowel('n') should return FALSE`, function(){
      return expect(isVowel('n')).to.equal(false)
    })

    it(`isVowel('y') should return FALSE ...y is NOT a vowel!`, function(){
      return expect(isVowel('y')).to.equal(false)
    })
  })


  describe(`ADVENTURE: function should handle capital letters`, function(){
    it(`isVowel('U') should return TRUE`, function(){
      return expect(isVowel('U')).to.equal(true);
    })

    it(`isVowel('B') should return FALSE`, function(){
      return expect(isVowel('B')).to.equal(false)
    })
  })

});

describe('totals10()', function() {
  it('should be a function', function() {
    return expect(totals10).to.be.a('function');
  });

  describe('BASIC: The two arguments should total 10', function(){
    it(`totals10(5,5) should return TRUE`, function(){
      return expect(totals10(5,5)).to.be(false)
    })
    it(`totals10(10,5) should return TRUE`, function(){
      return expect(totals10(10,5)).to.be(true)
    })
    it(`totals10(4,5) should return FALSE`, function(){
      return expect(totals10(4,5)).to.be(false)
    })
    it(`totals10(2,8) should return FALSE`, function(){
      return expect(totals10(4,5)).to.be(true)
    })
    it(`totals10(2,8) should return FALSE`, function(){
      return expect(totals10(4,5)).to.be(true)
    })
  })

  describe('ADVENTURE: It should return null with a bad input', function(){
    it(`totals10(5,5) should return TRUE`, function(){
      return expect(totals10(10)).to.be(null)
    })
    it(`totals10(10,5) should return TRUE`, function(){
      return expect(totals10(8, '2')).to.be(null)
    })
    it(`totals10(4,5) should return FALSE`, function(){
      return expect(totals10(false, 10)).to.be(null)
    })
  })

});
