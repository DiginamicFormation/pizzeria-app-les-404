describe('Test de ItemService: ', () => {
    beforeAll(() => {
        this.allItems = [
            {
                "id": "1",
                "type": "pizza",
                "label": "Margherita",
                "description": "Margerita pizza",
                "price": "12.00",
                "category": "veggie",
                "imageUrl": "./assets/img/pizza/margherita.jpg"
            },
            {
                "id": "2",
                "type": "pizza",
                "label": "4 cheese",
                "description": "4 cheese pizza",
                "price": "11.00",
                "category": "veggie",
                "imageUrl": "./assets/img/pizza/4cheese.jpg"
            },
            {
                "id": "3",
                "type": "pizza",
                "label": "Salmon",
                "description": "Salmon pizza",
                "price": "15.50",
                "category": "fish",
                "imageUrl": "./assets/img/pizza/salmon.jpg"
            },
            {
                "id": "4",
                "type": "pizza",
                "label": "Tuna",
                "description": "Tuna pizza",
                "price": "18.50",
                "category": "fish",
                "imageUrl": "./assets/img/pizza/tuna.jpg"
            },
            {
                "id": "5",
                "type": "pizza",
                "label": "Pepperoni",
                "description": "Pepperoni pizza",
                "price": "10.26",
                "category": "meat",
                "imageUrl": "./assets/img/pizza/pepperoni.jpg"
            },
            {
                "id": "6",
                "type": "drink",
                "label": "Coca-cola",
                "description": "Coca-cola drink",
                "price": "3.00",
                "imageUrl": "./assets/img/drink/coca-cola.jpg"
            },
            {
                "id": "7",
                "type": "drink",
                "label": "Orangina",
                "description": "Orangina drink",
                "price": "3.15",
                "imageUrl": "./assets/img/drink/orangina.jpg"
            },
            {
                "id": "8",
                "type": "drink",
                "label": "Fanta",
                "description": "Fanta drink",
                "price": "2.85",
                "imageUrl": "./assets/img/drink/fanta.jpg"
            },
            {
                "id": "9",
                "type": "drink",
                "label": "Sprite",
                "description": "Sprite drink",
                "price": "3.10",
                "imageUrl": "./assets/img/drink/sprite.jpg"
            },
            {
                "id": "10",
                "type": "entree",
                "label": "Caesar salad entree",
                "description": "Salad",
                "price": "5.00",
                "imageUrl": "./assets/img/entree/caesar-salad.jpg"
            },
            {
                "id": "11",
                "type": "entree",
                "label": "Avocados",
                "description": "Avocados entree",
                "price": "4.50",
                "imageUrl": "./assets/img/entree/avocado.jpg"
            },
            {
                "id": "12",
                "type": "entree",
                "label": "Shrimp",
                "description": "Shrimp entree",
                "price": "5.30",
                "imageUrl": "./assets/img/entree/shrimp.jpg"
            },
            {
                "id": "13",
                "type": "dessert",
                "label": "Yogurt",
                "description": "Yogurt dessert",
                "price": "2.00",
                "imageUrl": "./assets/img/dessert/yogurt.jpg"
            },
            {
                "id": "14",
                "type": "dessert",
                "label": "Muffin",
                "description": "Muffin dessert",
                "price": "2.10",
                "imageUrl": "./assets/img/dessert/muffin.jpg"
            },
            {
                "id": "15",
                "type": "dessert",
                "label": "Donut",
                "description": "Donut dessert",
                "price": "2.00",
                "imageUrl": "./assets/img/dessert/donut.jpg"
            },
            {
                "id": "16",
                "type": "menu",
                "label": "Best of",
                "description": "Best of",
                "coeff": "0.80",
                "imageUrl": "./assets/img/menu/bestof.png",
                "items": [
                    "1",
                    "12",
                    "15"
                ]
            },
            {
                "id": "17",
                "type": "menu",
                "label": "Tasty",
                "description": "Tasty menu",
                "coeff": "0.89",
                "imageUrl": "./assets/img/menu/tasty.jpg",
                "items": [
                    "5",
                    "7",
                    "14"
                ]
            },
            {
                "id": "18",
                "type": "menu",
                "label": "Pizza max",
                "description": "Max of pizzas menu",
                "coeff": "0.85",
                "imageUrl": "./assets/img/menu/pizzamax.jpg",
                "items": [
                    "1",
                    "2",
                    "4"
                ]
            }
        ]
    })

    beforeEach(() => {
        angular.mock.module('pizzeriaApp')
    })
    
    it('getItemById with available id',
        angular.mock.inject(($httpBackend, itemService) => {
            
            $httpBackend.when('GET', 'http://localhost:3000/item/1').respond([{
                "id": "1",
                "type": "pizza",
                "label": "Margherita",
                "description": "Margerita pizza",
                "price": "12.00",
                "category": "veggie",
                "imageUrl": "./assets/img/pizza/margherita.jpg"
            }]);
            itemService.getItemById(1).then(item => {
                expect(item).toBeDefined()
                expect(item.length).toBe(1)
                expect(item[0].id).toBe('1')
            })
            $httpBackend.flush();
        }))

    it('getItemById with not available id',
        angular.mock.inject(($httpBackend, itemService) => {
            
            $httpBackend.when('GET', 'http://localhost:3000/item/50').respond([]);
            itemService.getItemById(50).then(item => {
                expect(item).toBeDefined()
                expect(item.length).toBe(0)
            })
            $httpBackend.flush();
        }))

    it('getItemByType with existing type',
        angular.mock.inject(($httpBackend, itemService) => {
            
            $httpBackend.when('GET', 'http://localhost:3000/item').respond(this.allItems);
            itemService.getItemsByType('pizza').then(items => {
                expect(items).toBeDefined()
                expect(items.length).toBe(5)
                let pizza4Cheese = {
                    "id": "2",
                    "type": "pizza",
                    "label": "4 cheese",
                    "description": "4 cheese pizza",
                    "price": "11.00",
                    "category": "veggie",
                    "imageUrl": "./assets/img/pizza/4cheese.jpg"
                }
                expect(items).toContain(pizza4Cheese)
                let drinkOrangina = {
                    "id": "7",
                    "type": "drink",
                    "label": "Orangina",
                    "description": "Orangina drink",
                    "price": "3.15",
                    "imageUrl": "./assets/img/drink/orangina.jpg"
                }
                expect(items).not.toContain(drinkOrangina)
            })
            $httpBackend.flush();
        }))

    it('getItemByType with not existing type',
        angular.mock.inject(($httpBackend, itemService) => {
            
            $httpBackend.when('GET', 'http://localhost:3000/item').respond(this.allItems);
            itemService.getItemsByType('voiture').then(items => {
                expect(items).toBeDefined()
                expect(items.length).toBe(0)
            })
            $httpBackend.flush();
        }))
})