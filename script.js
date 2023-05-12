window.onload = function() {
    document.getElementById('compare').addEventListener('click', function() {
        const text1 = document.getElementById('text1');
        const text2 = document.getElementById('text2');
        const dmp = new diff_match_patch();
        const diffs = dmp.diff_main(text1.value, text2.value);
        dmp.diff_cleanupSemantic(diffs);
        let display1 = '';
        let display2 = '';
        diffs.forEach(([diff, text]) => {
            if (diff === 0) {
                display1 += text;
                display2 += text;
            } else if (diff === -1) {
                display1 += '<span style="background-color: red;">' + text + '</span>';
            } else if (diff === 1) {
                display2 += '<span style="background-color: green;">' + text + '</span>';
            }
        });
        text1.innerHTML = display1;
        text2.innerHTML = display2;
    });
}
