document.getElementById("runTasks").addEventListener("click", function() {
    // Исходный текст
    const text = `у лукоморья клён зелёный; златая цепь на клён том; и днём и ночью кот учёный; всё ходит по цепи кругом; идёт направо — песнь заводит; налево — сказку говорит; там чудеса: там леший бродит; русалка на ветвях сидит; там на неведомых дорожках; следы невиданных зверей; избушка там на курьих ножках; стоит без окон, без дверей; там лес и дол видений полны; там о заре прихлынут волны; на брег песчаный и пустой; и тридцать витязей прекрасных; чредой из вод выходят ясных; и с ними дядька их морской; там королевич мимоходом; пленяет грозного царя; там в облаках перед народом; через леса, через моря; колдун несёт богатыря; в темнице там царевна тужит; а бурый волк ей верно служит; там ступа с бабою ягой; идёт, бредёт сама собой; там царь кащей над златом чахнет; там русский дух… там русью пахнет!; и там я был, и мёд я пил; у моря видел клён зелёный; под ним сидел, и кот учёный; свои мне сказки говорил.`;

    // 1. Количество символов в тексте
    const charCount = text.length;
    console.log(`1. Количество символов в тексте: ${charCount}`);
    document.getElementById("charCount").textContent = charCount;

    // 2. Добавляем перенос строки после каждого символа ";"
    let result = text.replace(/;/g, ";\n");
    console.log(`2. Текст с переносами строк: \n${result}`);
    document.getElementById("textWithNewlines").textContent = result;

    // 3. Удаляем все пробелы
    let substring = result.replace(/\s/g, "");
    console.log(`3. Текст с удалёнными пробелами: ${substring}`);
    document.getElementById("textNoSpaces").textContent = substring;

    // 4. Извлекаем подстроку с 28-го по 50-й символ
    let newText = result.slice(27, 50);
    console.log(`4. Извлечение подстроки: ${newText}`);
    document.getElementById("substring").textContent = newText;

    // 5. Замена "клён" на "дубе"
    let replacedText = newText.replace(/клён/g, "дубе");
    console.log(`5. Замена "клён" на "дубе": ${replacedText}`);
    document.getElementById("replacedText").textContent = replacedText;

    // 6. Приводим строку result к верхнему регистру
    let replacedText2 = result.toUpperCase();
    console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);
    document.getElementById("upperText").textContent = replacedText2;

    // 7. Замена "клён" на "дуб" (все вхождения)
    let replacedText3 = result.replace(/клён/g, "дуб");
    console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`);
    document.getElementById("replacedText2").textContent = replacedText3;

    // 8. Находим индекс первого вхождения "моря"
    let index = text.indexOf("моря");
    console.log(`8. Индекс первого вхождения "моря": ${index}`);
    document.getElementById("indexOfSea").textContent = index;

    // 9. Изменяем только первую букву в строке replacedText на заглавную
    let modifiedText = replacedText.charAt(0).toUpperCase() + replacedText.slice(1);
    console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);
    document.getElementById("modifiedText").textContent = modifiedText;
});