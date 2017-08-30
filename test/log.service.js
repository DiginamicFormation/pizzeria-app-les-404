describe('Test de LogService: ', () => {
    beforeAll(() => {
        this.allAccounts = [
            {
                "id": "1",
                "firstName": "Robert",
                "lastName": "Malto",
                "email": "r.m@gmail.com",
                "password": "12345678",
                "adresse": "1235 rue de la Paix 75000 Paris"
            },
            {
                "id": "2",
                "firstName": "Georges",
                "lastName": "Trepo",
                "email": "g.t@gmail.com",
                "password": "12345678",
                "adresse": "12 rue de la Guerre 44000 Nantes"
            },
            {
                "id": "3",
                "firstName": "Marco",
                "lastName": "Polo",
                "email": "m.p@laposte.net",
                "password": "pwd",
                "adresse": "13 rue de la Guerre 44000 Nantes"
            },
            {
                "id": "4",
                "firstName": "Toto",
                "lastName": "Tata",
                "email": "t.t@hotmail.com",
                "password": "12345678",
                "adresse": "10 boulevard Foch 49000 Angers"
            },
            {
                "email": "root@root",
                "password": "root",
                "id": "B1ZlrszKW"
            }
        ]
    })

    beforeEach(() => {
        angular.mock.module('pizzeriaApp')

        sessionStorage.clear()
    })

    it('- test the connection and deconnection', angular.mock.inject((logService) => {
        expect(logService.isConnected()).toBe(false)
        logService.connect(1)
        expect(logService.isConnected()).toBe(true)
        expect(sessionStorage.getItem('userId')).toBe('1')
        logService.disconnect()
        expect(logService.isConnected()).toBe(false)
        expect(sessionStorage.getItem('userId')).toBeNull()
    }))

    // TODO
    
    // it('- user creation, existing check and availability', angular.mock.inject(($httpBackend, logService) => {
    //     $httpBackend.when('GET', 'http://localhost:3000/account').respond(this.allAccounts)
    //     let userFound = {
    //         "id": "4",
    //         "firstName": "Toto",
    //         "lastName": "Tata",
    //         "email": "t.t@hotmail.com",
    //         "password": "12345678",
    //         "adresse": "10 boulevard Foch 49000 Angers"
    //     }
    //     logService.checkUser('t.t@hotmail.com', '12345678')
    //         .then(user => {
    //             console.log(user);
    //             expect(user).toBeDefined()
    //         })
    // }))

    // // checkUser
    // // isMailFree
    // // createUser
})