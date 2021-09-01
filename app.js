Ext.application({
	extend: 'MyNew.Application',
	name: 'MyNew',
	mainView: 'MyNew.view.Main'
});
// Ext.application({
//     name: 'MyApp',
//     mainView: 'MyApp.view.Main'
//     });
// Ext.define('MyNew.view.MyViewModel', {
//     extend: 'Ext.app.ViewModel',
//     alias: 'viewmodel.myview',

//     stores: {
//         pokemon: {
//             type: 'store',
//             proxy: {
//                 type: 'ajax',
//                 url: 'pokemon.json'
//             },
//             autoLoad: true,
//             sorters: ['name']
//         },
//         filteredPokemon: {
//             type: 'chained',
//             source: '{pokemon}'
//         }
//     }

// });

// Ext.define('MyNew.view.PokemonGrid', {
//     extend: 'Ext.Panel',
//     xtype: 'pokemongrid',

//     defaultBindProperty: 'store',

//     viewModel: {
//         data: {
//             hitPointValue: 30
//         }
//     },

//     config: {
//         store: 'ext-empty-store'
//     },

//     applyStore: function (store) {
//         return Ext.data.StoreManager.lookup(store);
//     },

//     updateStore: function (store) {
//         this.down('grid').setStore(store);
//     },

//     layout: 'fit',
//     border: true,
//     margin: 8,

//     tbar: [{
//         xtype: 'sliderfield',
//         width: '100%',

//         bind: {
//             label: 'Hit Points over {hitPointValue}',
//             value: '{hitPointValue}'
//         },

//         increment: 1,
//         minValue: 30,
//         maxValue: 100,
//         liveUpdate: true,

//         listeners: {
//             change: function (slider, value) {
//                 var store = slider.up('pokemongrid').getStore();
//                 store.clearFilter();
//                 store.filterBy(function (record) {
//                     return (record.data.hp >= value);
//                 });
//             }
//         }
//     }],

//     items: [{
//         xtype: 'grid',
//         plugins: [{
//             type: 'gridsummaryrow'
//         }],
//         columns: [{
//             text: 'Name',
//             dataIndex: 'name',
//             flex: 1,
//             summary: 'count',
//             summaryRenderer: function (value) {
//                 return 'Filtered count: ' + value + ' Pokemon';
//             }
//         }, {
//             text: 'HP',
//             dataIndex: 'hp'
//         }]
//     }]
// });

// Ext.define('MyNew.view.Main', {
//     extend: 'Ext.Panel',

//     viewModel: 'myview',

//     layout: 'hbox',

//     defaults: {
//         flex: 1,
//         xtype: 'pokemongrid'
//     },

//     items: [{
//         title: 'Pokemon (Source)',
//         bind: '{pokemon}'
//     }, {
//         title: 'Pokemon (Chained)',
//         bind: '{filteredPokemon}'
//     }]
// });

Ext.application({
	extend: 'MyNew.Application',
    name: 'MyNew',
    mainView: 'MyNew.view.Main',
    launch: function() {
        var css = Ext.util.CSS.createStyleSheet();
        Ext.util.CSS.createRule(css, '.x-red', 'color:red !important;');
        Ext.util.CSS.createRule(css, '.x-green', 'color:green !important;');
        Ext.util.CSS.createRule(css, '.x-blue', 'color:blue !important;');
     
    }
    });