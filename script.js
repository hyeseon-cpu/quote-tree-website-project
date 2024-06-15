document.addEventListener('DOMContentLoaded', function () {

    //인용구 데이터다.
    const quotes = {
        exercise: [
            "운동은 몸뿐만 아니라 마음도 단련시킨다.",
            "다이어트는 강한 의지의 표현이다.",
            "유일하게 나쁜 운동은 하지 않은 운동이다.",
            "몸을 잘 돌보라. 그것은 네가 살아야 할 유일한 장소다.",
            "피트니스는 다른 사람보다 나아지는 것이 아니라, 예전의 나보다 나아지는 것이다.",
            "운동은 몸뿐만 아니라 마음, 태도, 기분까지 변화시킨다.",
            "오늘 느끼는 고통은 내일 느낄 힘이 될 것이다.",
            "몸은 마음이 원하는 것을 이룬다.",
            "꾸준함이 곧 강함이다.",
            "성공은 쉽지 않지만 그 가치가 있다.",
            "운동은 최고의 스트레스 해소제다.",
            "몸은 시간이 지나면서 자신이 먹는 음식의 결과물이 된다.",
            "결심은 작지만, 그 결심의 힘은 크다.",
            "운동은 자연의 무료 치료제다.",
            "지금 하는 작은 변화가 큰 변화를 만든다.",
            "운동은 마음을 강하게, 몸을 아름답게 한다.",
            "다이어트는 일시적인 것이 아니라, 생활 방식이다.",
            "한 번에 한 걸음씩 나아가라.",
            "운동은 몸의 긍정적인 변화를 위한 투자가 된다.",
            "오늘의 당신은 어제의 당신보다 강하다.",
            "운동을 하면 삶의 질이 향상된다.",
            "운동은 자기 자신에 대한 존중이다.",
            "작은 노력들이 모여 큰 결과를 만든다.",
            "운동은 새로운 시작을 위한 좋은 방법이다.",
            "운동은 모든 것을 더 좋게 만든다.",
            "운동은 자기 자신에게 주는 선물이다.",
            "지금 시작하면 내일 더 강해질 것이다.",
            "운동은 삶을 긍정적으로 변화시킨다.",
            "운동은 건강을 위한 최선의 투자다.",
            "운동은 건강과 행복의 열쇠다."
        ],
        love: [
            "사랑은 모든 것을 이긴다.",
            "진정한 사랑은 기다림 속에서 꽃핀다.",
            "사랑은 생명의 꽃이다.",
            "사랑은 나눌수록 커진다.",
            "사랑은 희생 없이는 존재할 수 없다.",
            "사랑은 가장 위대한 감정이다.",
            "사랑은 모든 것의 시작과 끝이다.",
            "사랑은 시간이 지나도 변치 않는다.",
            "사랑은 영혼의 유일한 진정제다.",
            "사랑은 마음의 불을 밝힌다.",
            "사랑은 두 사람을 하나로 만든다.",
            "사랑은 인생의 가장 큰 행복이다.",
            "사랑은 용서와 이해의 마음이다.",
            "사랑은 서로의 부족함을 채워주는 것이다.",
            "사랑은 두 마음의 합일이다.",
            "사랑은 모든 두려움을 없앤다.",
            "사랑은 서로를 존중하는 것이다.",
            "사랑은 서로의 꿈을 응원하는 것이다.",
            "사랑은 서로를 완성시켜준다.",
            "사랑은 마음의 자유를 준다.",
            "사랑은 진정한 행복의 원천이다.",
            "사랑은 영원히 기억되는 것이다.",
            "사랑은 희생과 배려의 마음이다.",
            "사랑은 서로의 아픔을 감싸주는 것이다.",
            "사랑은 서로를 믿는 것이다.",
            "사랑은 마음의 평화를 준다.",
            "사랑은 영혼의 위로다.",
            "사랑은 서로의 성장을 도와준다.",
            "사랑은 진실한 마음에서 나온다.",
            "사랑은 세상을 밝히는 빛이다."
        ],
        study: [
            "공부는 미래의 투자인 것이다.",
            "노력 없는 성공은 없다.",
            "공부는 지혜를 얻는 과정이다.",
            "공부는 새로운 세계를 여는 열쇠이다.",
            "지식은 힘이다.",
            "공부는 끝이 없는 여정이다.",
            "오늘의 공부가 내일의 나를 만든다.",
            "공부는 자신을 발전시키는 길이다.",
            "배움은 나를 풍부하게 한다.",
            "공부는 자신감을 키워준다.",
            "지식은 나눌수록 커진다.",
            "공부는 생각의 폭을 넓혀준다.",
            "공부는 문제 해결의 열쇠이다.",
            "배움에는 나이가 없다.",
            "지식은 가장 강력한 무기이다.",
            "공부는 나를 더 나은 사람으로 만든다.",
            "배움은 나의 가능성을 확장시킨다.",
            "공부는 나의 미래를 밝힌다.",
            "공부는 도전의 연속이다.",
            "지식은 어디에서나 나를 도와준다.",
            "공부는 나의 열정을 깨운다.",
            "공부는 나의 꿈을 이룰 수 있게 한다.",
            "배움은 나를 더 나은 인간으로 만든다.",
            "공부는 나의 삶을 풍요롭게 한다.",
            "공부는 나의 능력을 키워준다.",
            "지식은 나를 자유롭게 한다.",
            "공부는 나를 강하게 만든다.",
            "배움은 나를 성장시킨다.",
            "공부는 나의 미래를 준비하는 것이다.",
            "공부는 나의 삶을 바꾸는 힘이다."
        ],
        life: [
            "인생은 도전의 연속이다.",
            "긍정적인 생각이 긍정적인 인생을 만든다.",
            "인생은 내가 만드는 것이다.",
            "삶은 한 번뿐이다, 최선을 다해라.",
            "인생은 선택의 연속이다.",
            "행복은 작은 것에서 시작된다.",
            "인생은 끊임없는 배움의 과정이다.",
            "삶은 경험의 축적이다.",
            "인생은 나의 가능성을 발견하는 여정이다.",
            "삶은 기회와 도전으로 가득 차 있다.",
            "인생은 스스로 개척하는 것이다.",
            "행복은 마음먹기에 달려 있다.",
            "삶은 오늘의 선택이 내일을 만든다.",
            "인생은 아름다운 여행이다.",
            "삶은 나의 열정으로 채워야 한다.",
            "인생은 매 순간을 소중히 여기는 것이다.",
            "삶은 작은 행복을 모아 큰 행복을 만드는 것이다.",
            "인생은 사랑으로 가득 차야 한다.",
            "삶은 자신을 사랑하는 법을 배우는 것이다.",
            "인생은 나의 가치를 발견하는 여정이다.",
            "삶은 도전과 성취의 연속이다.",
            "인생은 나의 꿈을 실현하는 무대이다.",
            "삶은 내가 주인공인 이야기이다.",
            "인생은 스스로를 믿는 것이다.",
            "삶은 나의 열정을 따르는 것이다.",
            "인생은 긍정적인 에너지를 모으는 것이다.",
            "삶은 나의 가능성을 최대한으로 발휘하는 것이다.",
            "인생은 나의 길을 찾는 것이다.",
            "삶은 나의 꿈을 이루는 것이다.",
            "인생은 자신을 표현하는 것이다."
        ]
    };

    // 기능 동작 부분



    // 변수 선언 부분이다. 
    const currentPath = window.location.pathname;
    const randomQuotesContainer = document.getElementById('random-quotes');
    const exerciseContainer = document.querySelector('#exercise .quote-container');
    const loveContainer = document.querySelector('#love .quote-container');
    const studyContainer = document.querySelector('#study .quote-container');
    const lifeContainer = document.querySelector('#life .quote-container');
    const savedQuotesContainer = document.getElementById('saved-quotes');
    const diaryEntriesContainer = document.getElementById('diary-entries');
    const newDiaryEntryButton = document.getElementById('new-diary-entry');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResultsContainer = document.getElementById('search-results');

    // Home 에서 랜덤으로 인용구를 보여준다. 
    function displayRandomQuotes() {
        const allQuotes = [...quotes.exercise, ...quotes.love, ...quotes.study, ...quotes.life];
        const selectedIndices = new Set();
        randomQuotesContainer.innerHTML = '';

        while (selectedIndices.size < 100 && selectedIndices.size < allQuotes.length) {
            const randomIndex = Math.floor(Math.random() * allQuotes.length);
            if (!selectedIndices.has(randomIndex)) {
                selectedIndices.add(randomIndex);
                const quote = allQuotes[randomIndex];
                const quoteBlock = createQuoteBlock(quote);
                randomQuotesContainer.appendChild(quoteBlock);
            }
        }
    }

    //인용구 블럭에 대한 컴포넌트 
    function createQuoteBlock(quote, isSaved = false) {
        const block = document.createElement('div');
        block.classList.add('quote-block');
        block.innerHTML = `<p>${quote}</p><span class="heart-button">📌</span>`;
        if (isSaved) {
            const deleteButton = document.createElement('span');
            deleteButton.innerHTML = '👋';
            deleteButton.classList.add('delete-button');
            deleteButton.addEventListener('click', () => deleteQuote(quote));
            block.appendChild(deleteButton);
        } else {
            block.querySelector('.heart-button').addEventListener('click', () => saveQuote(quote));
        }
        return block;
    }

    // 인용구를 저장하기 위한 컴포넌트이다.
    function saveQuote(quote) {
        let savedQuotes = JSON.parse(localStorage.getItem('savedQuotes')) || [];
        if (!savedQuotes.includes(quote)) {
            savedQuotes.push(quote);
            localStorage.setItem('savedQuotes', JSON.stringify(savedQuotes));
            displaySavedQuotes();
        }
    }

    // 인용구를 지우기 위한 컴포넌트이다.
    function deleteQuote(quote) {
        let savedQuotes = JSON.parse(localStorage.getItem('savedQuotes')) || [];
        savedQuotes = savedQuotes.filter(savedQuote => savedQuote !== quote);
        localStorage.setItem('savedQuotes', JSON.stringify(savedQuotes));
        displaySavedQuotes();
    }

    // My Page에 저장한 인용구를 보여주는 컴포넌트이다. 
    function displaySavedQuotes() {
        const savedQuotes = JSON.parse(localStorage.getItem('savedQuotes')) || [];
        savedQuotesContainer.innerHTML = '';
        savedQuotes.forEach(quote => {
            const quoteBlock = createQuoteBlock(quote, true);
            savedQuotesContainer.appendChild(quoteBlock);
        });
    }

    // 인용구들을 카테고리마다 맞는 자리에 보여주는 컴포넌트이다. 
    function displayQuotes(category, container) {
        container.innerHTML = '';
        quotes[category].forEach(quote => {
            const quoteBlock = createQuoteBlock(quote);
            container.appendChild(quoteBlock);
        });
    }

    // 일기장에 기본으로 제공하는 부분을 담당하는 컴포넌트이다. (날짜, 시간)
    function createDiaryEntryHeader() {
        const now = new Date();
        const header = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
        return header;
    }

    // 일기의 저장/ 삭제를 관리하는 부분이다, 


    // 일기장을 저장하는 컴포넌트이다.
    function saveDiaryEntry(header, content) {
        let diaryEntries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
        const newEntry = {
            id: Date.now(), // 고유한 id 생성
            header: header,
            content: content
        };
        diaryEntries.push(newEntry);
        localStorage.setItem('diaryEntries', JSON.stringify(diaryEntries));
        displayDiaryEntries();
    }


    // 일기를 보여주는 부분이다.


    // 일기의 수정, 삭제, 저장을 총괄한다.
    function displayDiaryEntries() {
    const diaryEntries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
    diaryEntriesContainer.innerHTML = '';
    diaryEntries.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('diary-entry');
        entryDiv.innerHTML = `
            <h3>${entry.header}</h3>
            <p>${entry.content}</p>
            <button class="delete-button">🗑️</button>
            <button class="edit-button">수정</button>
        `;

        // 삭제 버튼 이벤트 리스너
        entryDiv.querySelector('.delete-button').addEventListener('click', () => {
            deleteDiaryEntry(entry.id);
        });
        // 수정 버튼 이벤트 리스너
        entryDiv.querySelector('.edit-button').addEventListener('click', () => {
            editDiaryEntry(entry);
        });
        diaryEntriesContainer.appendChild(entryDiv);
    });
}

    
    if (newDiaryEntryButton) {
        newDiaryEntryButton.addEventListener('click', () => {
            const entry = document.createElement('div');
            entry.classList.add('diary-entry');
            entry.innerHTML = `<h3>${createDiaryEntryHeader()}</h3><textarea id="diary-input"> 🌼 당신의 생각을 적어보세요 </textarea><button class="save-button">저장</button>`;
            diaryEntriesContainer.appendChild(entry);

            entry.querySelector('.save-button').addEventListener('click', () => {
                const header = entry.querySelector('h3').innerText;
                const content = entry.querySelector('textarea').value;
                saveDiaryEntry(header, content);
                entry.remove();
            });

            entry.querySelector('.delete-button').addEventListener('click', () => {
                entry.remove();
            });
        });
    }

    // 일기를 삭제하는 컴포넌트이다.
    function deleteDiaryEntry(entryId) {
        let diaryEntries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
        diaryEntries = diaryEntries.filter(entry => entry.id !== entryId);
        localStorage.setItem('diaryEntries', JSON.stringify(diaryEntries));
        displayDiaryEntries();
    }

    // 기존 일기 내용을 수정할 수 있는 입력 필드를 만듭니다.
    function editDiaryEntry(entry) {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('diary-entry');
        entryDiv.innerHTML = `
            <h3>${entry.header}</h3>
            <textarea>${entry.content}</textarea>
            <button class="save-button">저장</button>
            <button class="cancel-button">취소</button>
        `;
    
        // 저장 버튼 클릭 이벤트 리스너
        entryDiv.querySelector('.save-button').addEventListener('click', () => {
            const updatedContent = entryDiv.querySelector('textarea').value;
            saveUpdatedDiaryEntry(entry.id, updatedContent);
        });
    
        // 취소 버튼 클릭 이벤트 리스너
        entryDiv.querySelector('.cancel-button').addEventListener('click', () => {
            displayDiaryEntries();
        });
    
        // 기존 일기 항목을 수정 가능한 항목으로 대체
        diaryEntriesContainer.innerHTML = '';
        diaryEntriesContainer.appendChild(entryDiv);
    }
    
    // 수정한 일기를 다시 로컬에 업데이트 합니다.
    function saveUpdatedDiaryEntry(id, updatedContent) {
        let diaryEntries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
        diaryEntries = diaryEntries.map(entry => {
            if (entry.id === id) {
                return { ...entry, content: updatedContent };
            }
            return entry;
        });
        localStorage.setItem('diaryEntries', JSON.stringify(diaryEntries));
        displayDiaryEntries();
    }
    // 인용구 검색 함수
    function searchQuotes(keyword) {
        searchResultsContainer.innerHTML = '';
        const allQuotes = [
            ...quotes.exercise.map(q => ({ category: 'exercise', quote: q })),
            ...quotes.love.map(q => ({ category: 'love', quote: q })),
            ...quotes.study.map(q => ({ category: 'study', quote: q })),
            ...quotes.life.map(q => ({ category: 'life', quote: q }))
        ];
        const filteredQuotes = allQuotes.filter(q => q.quote.includes(keyword));
        filteredQuotes.forEach(q => {
            const block = document.createElement('div');
            block.classList.add('quote-block');
            block.innerHTML = `<p>${q.quote}</p><a href="${q.category}.html" class="link-button">이동하기</a>`;
            searchResultsContainer.appendChild(block);
        });
    }

    if (searchButton) {
        searchButton.addEventListener('click', () => {
            const keyword = searchInput.value.trim();
            if (keyword) {
                searchQuotes(keyword);
            }
        });
    }

    // 현재 위치한 카테고리에 맞는 적절한 인용구들을 보여주는 부분이다. 
    if (currentPath.includes('index.html') || currentPath === '/') {
        displayRandomQuotes();
    } else if (currentPath.includes('exercise.html')) {
        displayQuotes('exercise', exerciseContainer);
    } else if (currentPath.includes('love.html')) {
        displayQuotes('love', loveContainer);
    } else if (currentPath.includes('study.html')) {
        displayQuotes('study', studyContainer);
    } else if (currentPath.includes('life.html')) {
        displayQuotes('life', lifeContainer);
    } else if (currentPath.includes('mypage.html')) {
        displaySavedQuotes();
        displayDiaryEntries();
    }
});