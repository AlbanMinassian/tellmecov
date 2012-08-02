test:
	@npm test

clean:
	@rm -rf lib-cov
	@rm -f coverage.html    

jscoverage:
	@rm -rf lib-cov
	@/usr/local/bin/jscoverage lib lib-cov

coverage: jscoverage
	@rm -f coverage.html
	@TELLMECOV=1 mocha --require should -R html-cov > coverage.html
	@rm -rf lib-cov

coverage-json: jscoverage
	@rm -f coverage.json
	@TELLMECOV=1 mocha --require should -R json-cov > coverage.json
	@rm -rf lib-cov

.PHONY: test clean coverage coverage-json
