import applyFilters from '../../utils/applyFilters';

const state = {
    evs: [
        { _id: '12345', make: { _id: '67890', name: 'Tesla' }  },
        { _id: '23456', make: { _id: '67890', name: 'Tesla' }  },
        { _id: '34567', make: { _id: '678901', name: 'Renault' }  },
        { _id: '45678', make: { _id: '678902', name: 'Nissan' }  },
        { _id: '56789', make: { _id: '678903', name: 'Jaguar' }  },
    ],
    make: { 
        options: [
            { _id: '67890', name: 'Tesla', checked: true },
            { _id: '678901', name: 'Renault', checked: false },
            { _id: '678902', name: 'Nissan', checked: false },
            { _id: '678903', name: 'Jaguar', checked: true },
        ]
    }
};

const filteredEvs =  [
    { _id: '12345', make: { _id: '67890', name: 'Tesla' }  },
    { _id: '23456', make: { _id: '67890', name: 'Tesla' }  },
    { _id: '56789', make: { _id: '678903', name: 'Jaguar' }  },
];

describe('applyFilters', () => {
    it('returns filtered EVs correctly', () => {
        expect(applyFilters(state)).toEqual(filteredEvs);
    });
});
