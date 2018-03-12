
export default function presentData(msg){
    $('#result').html('');
    for (var i = 0; i < 12; i++) {
        var photo = msg.items[i].avatar_url;
        var name = msg.items[i].login;
        var img = $('<img>');
        img.attr('src', photo);
        img.addClass('style');
        var p = $('<p>');
        p.text(name);
        var container = $('<div>');
        container.addClass('float');
        container.append(p);
        container.append(img);
        $('#result').append(container);
    }
  //  location.reload();
}