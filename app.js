const skate = window.skate;

skate.define('x-test', {
    props: {
        text: { attribute: true }
    },
    render(elem) {
        return skate.h('div', 'This is a test: ', elem.text);
    },
    updated (elem, prevProps) {
        return true;
    }
});

let table = skate.define('sort-table', {
    props: {
        rows: {
            coerce(value) {
                return JSON.parse(value);
            },
            attribute: true
        },
        headers: {
            coerce(value) {
                return JSON.parse(value);
            },
            attribute: true
        }
    },
    attributeChanged(elem, data) {
        if (data.oldValue === undefined) {
        // created
        } else if (data.newValue === undefined) {
        // removed
        } else {
            console.log('updated: ');
            console.log(data);
            console.log(elem);
        }
    },
    render(elem) {
        let headers = elem.headers.map(header => skate.h('th', { class: 'header' }, header));
        let rows = elem.rows.map(row => skate.h('tr', {}, row.cells.map(cell => skate.h('td', { class: 'cell' }, cell.data))));
        return skate.h('table', {},
            skate.h('thead', {}, 
                skate.h('tr', {}, headers)
            ),
            skate.h('tbody', {}, 
                rows
            )        
        )
    }
});