alert('WELCOME TO OUR WEBSITE');
function percentage() {
    let s1 = parseInt(document.getElementById('E').value);
    let s2 = parseInt(document.getElementById('U').value);
    let s3 = parseInt(document.getElementById('C').value);
    let s4 = parseInt(document.getElementById('P').value);
    let total = parseInt(document.getElementById('T').value);
    let obtm = s1 + s2 + s3 + s4;
    let final = (obtm / total) * 100;
    document.getElementById('p').value = final;

    if (final >= 91 && final <= 100) {
        document.getElementById('g').value = 'EXCELLENT! YOU GOT A+';
    } else if (final >= 80 && final <= 90) {
        document.getElementById('g').value = 'GREAT! YOU GOT A';
    } else if (final >= 70 && final <= 79) {
        document.getElementById('g').value = 'NICE! YOU GOT B+';
    } else if (final >= 60 && final <= 69) {
        document.getElementById('g').value = 'NOT BAD! YOU GOT B';
    } else if (final >= 50 && final <= 59) {
        document.getElementById('g').value = 'POOR! YOU GOT C';
    } else {
        document.getElementById('g').value = 'SORRY! BUT YOU GOT F';
    }
}