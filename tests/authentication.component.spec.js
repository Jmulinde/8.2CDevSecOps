const tap = require('tap');

tap.test('Authentication Component Tests', function (t) {

    t.test('passwords should not match', function (t) {
        const password = 'password1';
        const confirmPassword = 'password2';

        t.notEqual(
            password,
            confirmPassword,
            'Different passwords should not match'
        );

        t.end();
    });

    t.test('matching passwords should be accepted', function (t) {
        const password = 'myPassword';
        const confirmPassword = 'myPassword';

        t.equal(
            password,
            confirmPassword,
            'Matching passwords should be accepted'
        );

        t.end();
    });

    t.end();
});