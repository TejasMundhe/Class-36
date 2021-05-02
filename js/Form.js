class Form{
    constructor(){
    }
    display(){
        var title = createElement('h2');
        title.html("Car-Racing Game");
        title.position(200,200);

        var input = createInput("Name");
        input.position(150,200);

        var button = createButton('Play');
        button.position(250, 200);

        var greeting = createElement('h3');
        
        button.mousePressed(function (){
            input.hide();
            button.hide();
            var name = input.value();

            greeting.html("Welcome to the game!" + name);
            greeting.position(150,150);
            
            playerCount = playerCount+1;
            player.update(name);
            player.updateCount(playerCount);
        })
    }
}