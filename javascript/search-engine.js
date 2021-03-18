class SearchEngine {
    constructor(documents) {
        this.docData = this.buildDocData(documents);
    }

    buildDocData(documents) {
        const data = [];
        for (const document of documents) {
            const counts = {};
            document.split(' ').forEach((word) => counts[word] = ++counts[word] || 1);
            data.push(counts);
        }
        return data;
    }

    searchDocuments(query) {
        const results = [];
        for (let i = 0; i < this.docData.length; i++) {
            const score = this.documentScore(this.docData[i], query);
            if (score > 0) results.push({index: i, score});
        }
        return results;
    }

    documentScore(documentTerms, query) {
        const terms = query.split(' ');
        let score = 0;

        for (const term of terms) {
            if (term in documentTerms) {
                const count = documentTerms[term];
                const tf = Math.sqrt(count);
                score += tf;
            }
        }

        return score;
    }
}

const searchEngine = new SearchEngine(["this is a document", "this is another document", "this is a long document about a dog and a cat"]);
const res = searchEngine.searchDocuments('cat dog cat');
console.log(res);
