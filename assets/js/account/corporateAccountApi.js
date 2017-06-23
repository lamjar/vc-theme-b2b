angular.module('storefront.account')
.factory('storefront.corporateAccountApi', ['$resource', function ($resource) {
    var urlPrefix = 'http://localhost/admin/';
    //var urlPrefix = 'http://demovc-admin-dev.azurewebsites.net/';

    var api_key = '1b5ad880c3ce44089f8312c3cde88645';

    return $resource(urlPrefix + 'api/b2b/companyMembers:api_key', { api_key: api_key }, {
        getCompanyById: { url: urlPrefix + 'api/b2b/company/:id' },
        updateCompany: { url: urlPrefix + 'api/b2b/company', method: 'POST' },

        getCompanyMembers: { url: urlPrefix + 'api/b2b/companyMembers', method: 'POST' },
        getCompanyMember: { url: urlPrefix + 'api/b2b/companyMember/:id' },
        updateCompanyMember: { url: urlPrefix + 'api/b2b/companyMember', method: 'POST' },
        deleteCompanyMember: { url: urlPrefix + 'api/b2b/companyMembers', method: 'DELETE' }
    });
}])