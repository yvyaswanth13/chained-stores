Ext.define('MyNew.view.MyViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.myview',
 
    stores: {
        pokemon: {
            type: 'store',
            proxy: {
                type: 'ajax',
                url: 'pokemon.json'
            },
            autoLoad: true,
            sorters: ['name']
        },
        filteredPokemon: {
            type: 'chained',
            source: '{pokemon}'
        }
    }
});