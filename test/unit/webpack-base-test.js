const assert = require('assert');

describe('webpack.base.js test case', () => {
    const baseConfig = require('../../lib/webpack.base');

    it('entry',()=>{
        assert.equal(baseConfig.entry.index, 'C:/Users/Administrator/Desktop/webpack/builder-webpack/test/smoke/template/src/index/index.js');
        assert.equal(baseConfig.entry.search, 'C:/Users/Administrator/Desktop/webpack/builder-webpack/test/smoke/template/src/search/index.js');
    })
})