// import {create} from 'zustand';
// import {useShallow} from 'zustand/shallow';

// const useBearStore = create(set => ({
//   bears: 0,
//   increasePopulation: () => set(state => ({bears: state.bears + 1})),
//   removeAllBears: () => set({bears: 0}),
// }));

// // Object pick, re-renders the component when either state.nuts or state.honey change
// const {nuts, honey} = useBearStore(
//   useShallow(state => ({nuts: state.nuts, honey: state.honey})),
// );

// // Array pick, re-renders the component when either state.nuts or state.honey change
// const [nuts, honey] = useBearStore(
//   useShallow(state => [state.nuts, state.honey]),
// );

// // Mapped picks, re-renders the component when state.treats changes in order, count or keys
// const treats = useBearStore(useShallow(state => Object.keys(state.treats)));
