document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculate');
    calculateButton.addEventListener('click', calculateBMI);
    
    function calculateBMI() {
        // 入力フィールドからの値の取得
        const heightInput = document.getElementById('height').value.trim();
        const heightUnit = document.getElementById('height-unit').value;
        const weightInput = document.getElementById('weight').value.trim();
        const weightUnit = document.getElementById('weight-unit').value;
        
        // エラーメッセージの初期化
        document.getElementById('height-error').textContent = '';
        document.getElementById('weight-error').textContent = '';
        
        // 入力チェック（空入力、数値のみ）
        let hasError = false;
        
        if (!heightInput) {
            document.getElementById('height-error').textContent = '身長を入力してください。';
            hasError = true;
        } else if (!/^\d+(\.\d+)?$/.test(heightInput)) {
            document.getElementById('height-error').textContent = '身長は数値のみ入力してください。';
            hasError = true;
        }
        
        if (!weightInput) {
            document.getElementById('weight-error').textContent = '体重を入力してください。';
            hasError = true;
        } else if (!/^\d+(\.\d+)?$/.test(weightInput)) {
            document.getElementById('weight-error').textContent = '体重は数値のみ入力してください。';
            hasError = true;
        }
        
        if (hasError) {
            document.getElementById('result').style.display = 'none';
            return;
        }
        
        // 単位の変換
        let heightM = parseFloat(heightInput);
        if (heightUnit === 'cm') {
            heightM = heightM / 100; // cmからmへの変換
        }
        
        let weightKg = parseFloat(weightInput);
        if (weightUnit === 'g') {
            weightKg = weightKg / 1000; // gからkgへの変換
        }
        
        // BMIの計算
        const bmi = weightKg / (heightM * heightM);
        const roundedBmi = Math.round(bmi * 10) / 10; // 小数点第一位まで
        
        // BMIの評価
        let category;
        let resultClass;
        
        if (bmi < 18.5) {
            category = '低体重（痩せ型）';
            resultClass = 'underweight';
        } else if (bmi < 25) {
            category = '普通体重';
            resultClass = 'normal';
        } else if (bmi < 30) {
            category = '肥満（1度）';
            resultClass = 'overweight';
        } else {
            category = '肥満（2度以上）';
            resultClass = 'obese';
        }
        
        // 結果の表示
        document.getElementById('bmi-value').textContent = roundedBmi;
        document.getElementById('bmi-category').textContent = category;
        
        const resultDiv = document.getElementById('result');
        resultDiv.style.display = 'block';
        resultDiv.className = resultClass;
        
        // 対応する行を強調表示
        highlightBmiStandardRow(resultClass);
    }
    
    function highlightBmiStandardRow(bmiClass) {
        // 全ての行からハイライトを削除
        const rows = document.querySelectorAll('#bmi-standards table tbody tr');
        rows.forEach(row => {
            row.classList.remove('highlight');
        });
        
        // 対応する行にハイライトクラスを追加
        const targetRow = document.querySelector(`#bmi-standards table tbody tr.${bmiClass}`);
        if (targetRow) {
            targetRow.classList.add('highlight');
        }
    }
});