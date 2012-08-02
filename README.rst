.. -*- coding: utf-8 -*-

.. image:: https://secure.travis-ci.org/ami44/tellmecov.png

.. image:: https://github.com/ami44/tellmecov/raw/master/coverage.png

tellmecov
=========

Tell me coverage rank. 

Read ``coverage.json`` generate by `mocha <http://visionmedia.github.com/mocha/>`_

Install
---------------------------------------------------------

npm install -g tellmecov

Usage 
---------------------------------------------------------

::

    Usage: tellmecov [options] <json coverage file ... >

    Options:

        -h, --help                  output usage information
        -V, --version               output the version number
        -r, --globalrank            print global rank
        -b, --globalbadge <output>  write badge png to file <output> 

    Examples:

        $ tellmecov --help
        $ tellmecov --version
        $ tellmecov --globalrank "/path/to/read/coverage.json"
        $ tellmecov --globalbadge "/path/to/write/coverage.png" "/path/to/read/coverage.json"


Licence
------------------------------------------
Code licensed under the `GNU GENERAL PUBLIC LICENSE <http://www.gnu.org/copyleft/gpl.html>`_ Version 3 
