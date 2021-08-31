Ext.define('MyNew.view.PokemonGrid', {
    extend: 'Ext.Panel',
    xtype: 'pokemongrid',
 
    defaultBindProperty: 'store',
 
    viewModel: {
        data: {
            hitPointValue: 30
        }
    },
 
    config: {
        store: 'ext-empty-store'
    },
 
    applyStore: function (store) {
        return Ext.data.StoreManager.lookup(store);
    },
 
    updateStore: function (store) {
        this.down('grid').setStore(store);
    },
 
    layout: 'fit',
    border: true,
    margin: 8,
 
    tbar: [{
        xtype: 'sliderfield',
        width: '100%',
 
        bind: {
            label: 'Hit Points over {hitPointValue}',
            value: '{hitPointValue}'
        },
 
        increment: 1,
        minValue: 30,
        maxValue: 100,
        liveUpdate: true,
 
        listeners: {
            change: function (slider, value) {
                var store = slider.up('pokemongrid').getStore();
                store.clearFilter();
                store.filterBy(function (record) {
                    return (record.data.hp >= value);
                });
            }
        }
    }],
 
    items: [{
        xtype: 'grid',
        plugins: [{
            type: 'gridsummaryrow'
        }],
        columns: [{
            text: 'Name',
            dataIndex: 'name',
            flex: 1,
            summary: 'count',
            summaryRenderer: function (value) {
                return 'Filtered count: ' + value + ' Pokemon';
            }
        }, {
            text: 'HP',
            dataIndex: 'hp'
        }]
    }]
});