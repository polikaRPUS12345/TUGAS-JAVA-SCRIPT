function Kirim (){
    var nama=(document.formInput.namaInput.value);
    document.formOutput.namaOutput.value = nama;

    var nim= (document.formInput.nimInput.value);
    document.formOutput.nimOutput.value=nim;

    var kelamin=(document.formInput.kelaminInput.value);
    document.formOutput.kelaminOutput.value=kelamin;

    var agama=(document.formInput.agamaInput.value);
    document.formOutput.agamaOutput.value=agama;

    var jurusan=(document.formInput.jurusanInput.value);
    document.formOutput.jurusanOutput.value=jurusan;

    var komentar=(document.formInput.komentarInput.value);
    document.formOutput.komentarOutput.value=komentar;

    if(document.formInput.statusInput.checked==true){
        document.formOutput.statusOutput.value="Menikah"
    }else{
        document.formOutput.statusOutput.value="Belum Menikah"
    }


}