function x_preview() {
    var x_url = new URL(document.getElementById('x_url').value); // Issue: Self-XSS
    document.getElementById('x_view_img_src').src = document.getElementById('x_img').value;
    document.getElementById('x_view_title').textContent = document.getElementById('x_title').value;
    document.getElementById('x_view_url').href = document.getElementById('x_url').value;
    document.getElementById('x_view_url').textContent = 'From ' + x_url.hostname;
}

function x_code() {
    x_card_tag = ''; // Empty
    x_card_tag = x_card_tag + '<meta name="twitter:card" content="' + document.getElementById('x_type').value + '">\n';
    x_card_tag = x_card_tag + '<meta name="twitter:site" content="' + document.getElementById('x_name').value + '">\n';
    x_card_tag = x_card_tag + '<meta name="twitter:title" content="' + document.getElementById('x_title').value + '">\n';
    x_card_tag = x_card_tag + '<meta name="twitter:description" content="' + document.getElementById('x_desc').value + '">\n';
    x_card_tag = x_card_tag + '<meta name="twitter:image:src" content="' + document.getElementById('x_img').value + '">\n';
    x_card_tag = x_card_tag + '<meta name="twitter:image:alt" content="' + document.getElementById('x_alt').value + '">\n';
    document.getElementById('x_code').textContent = x_card_tag;
}

function x_reset(){
    empty = ''; // Empty
    document.getElementById('x_url').value = empty;
    document.getElementById('x_title').value = empty;
    document.getElementById('x_desc').value = empty;
    document.getElementById('x_img').value = empty;
    document.getElementById('x_alt').value = empty;
    document.getElementById('x_type').value = 'summary_large_image';
    document.getElementById('x_name').value = empty;
    document.getElementById('x_view_img_src').src = '#';
    document.getElementById('x_view_title').textContent = 'No data';
    document.getElementById('x_view_url').href = empty;
    document.getElementById('x_view_url').textContent = 'From No data';
    document.getElementById('x_code').textContent = 'No contents.';
}