function sample1() {
    var x_url = new URL('https://reinforc.hu/');
    document.getElementById('x_url').value = 'https://reinforc.hu/';
    document.getElementById('x_title').value = 'Sample';
    document.getElementById('x_desc').value = 'X Card Generation Tool.';
    document.getElementById('x_img').value = 'https://reinforc.hu/img/reinforchu.png';
    document.getElementById('x_alt').value = 'Sample image';
    document.getElementById('x_type').value = 'summary_large_image';
    document.getElementById('x_name').value = '@reinforchu';
    x_preview();
    x_code();
}

function sample2() {
    var x_url = new URL('https://rein.jp/');
    document.getElementById('x_url').value = 'https://rein.jp/';
    document.getElementById('x_title').value = 'rein://lab.';
    document.getElementById('x_desc').value = 'Cybersecurity R&D activists.';
    document.getElementById('x_img').value = 'https://rein.jp/img/rein.png';
    document.getElementById('x_alt').value = 'Logo';
    document.getElementById('x_type').value = 'summary_large_image';
    document.getElementById('x_name').value = '@ReinSecLab';
    x_preview();
    x_code();
}