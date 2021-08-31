 
Ext.define('MyNew.view.Main', {
    extend: 'Ext.Panel',
    viewModel: {
        type: 'myview'
    },
    layout: 'hbox',
    defaults: {
        flex: 1,
        xtype: 'pokemongrid'
    },
    items: [{
        title: 'Pokemon (Source)',
        bind: {
            store: '{pokemon}'
        }
    }, {
        title: 'Filtered Pokemon (Chained)',
        bind: {
            store: '{filteredPokemon}'
        }
    }]
});