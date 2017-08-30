describe('Test de ItemService avec $http', () => {
    beforeEach(() => {
        angular.mock.module('pizzeriaApp')
    })
    //injection du mock $httpBackend
    it('mock du service $http', angular.mock.inject((apiUrlsService) => {
        expect(apiUrlsService).toBeDefined()
        expect(apiUrlsService.base).toBe('http://localhost:3000/')
        expect(apiUrlsService.item).toBe('http://localhost:3000/item')
        expect(apiUrlsService.account).toBe('http://localhost:3000/account')
        expect(apiUrlsService.command).toBe('http://localhost:3000/command')
    }))
})