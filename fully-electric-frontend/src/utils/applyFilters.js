export default function applyFilters(state) {
    let filteredMakes = state.make.options.slice().filter((make) => make.checked).map((make) => make._id);
    if (filteredMakes.length === 0) {
        filteredMakes = state.make.options.slice().map((make) => make._id);
    }
    return state.evs.slice().filter((ev) => filteredMakes.includes(ev.make._id));
}
