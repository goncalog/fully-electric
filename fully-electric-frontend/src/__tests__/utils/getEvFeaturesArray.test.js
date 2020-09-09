import getEvFeaturesArray from '../../utils/getEvFeaturesArray';

describe('getEvFeatures', () => {
    it('returns the right array', () => {
        expect(getEvFeaturesArray(['Air conditioning', 'Brake assistance', 'Traction control', 'Speed control']))
                .toEqual([{ name: 'Air conditioning', value: 'Included' },
                          { name: 'Brake assistance', value: 'Included' },
                          { name: 'Traction control', value: 'Included' },
                          { name: 'Speed control', value: 'Included' } ]);

        expect(getEvFeaturesArray(['Brake assistance', 'Speed control']))
                .toEqual([{ name: 'Brake assistance', value: 'Included' },
                          { name: 'Speed control', value: 'Included' } ]);

        expect(getEvFeaturesArray(['Speed control'])).toEqual([{ name: 'Speed control', value: 'Included' } ]);
    });
});
