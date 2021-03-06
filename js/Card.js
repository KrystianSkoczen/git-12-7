// KLASA KANBAN CARD
function Card(id, name) {
    var self = this;

    this.id = id;
    this.name = name;
    this.element = generateTemplate('card-template', {
        description: this.name
    }, 'li');

    this.element.querySelector('.btn-delete').addEventListener('click', function(event) {
                    self.removeCard();
        
    });
}
Card.prototype = {

    removeCard: function() {
        var self = this;

        fetch(baseUrl + '/card/' + self.id, {
                method: 'DELETE',
                headers: myHeaders
            })
            .then(function(resp) {
                return resp.json();
            })
            .then(function(resp) {
                self.element.parentNode.removeChild(this.element);
            })
    }
}