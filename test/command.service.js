
describe('Test de CommandService: ', () => {


    beforeEach(() => {
        angular.mock.module('pizzeriaApp')
    })

    it('getItemById with available id',
        angular.mock.inject(($httpBackend, itemService) => {

            $httpBackend.when('GET', 'http://localhost:3000/command/CMD11225').respond([{
                "id": "CMD11225",
                "idUser": "3",
                "items": [
                    "1",
                    "2",
                    "3"
                ],
                "date": "20/05/1999",
                "status": "preparing"
            }
            ]);
            let list = commandService.listCommands
            list[1].expect(item).toBeDefined()
            list[1].expect(item.legth).toBe(1)
            list[0].expect(item.id).toBe("CMD11225")

        }))
    
})





