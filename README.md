## useLayoutEffect
1. Update state
2. Update DOM (mutated)
3. Call cleanup function if deps is changed
4. Call useLayoutEffect callback (sync)
5. Re-render UI


## memo (Higher Order Component (HOC))


## useRef
1. Một ref được tạo khi component đã mount, ref được gán cho một element muốn
truyền ref thông qua component thì dùng forwardRef
2. Ref có thể sử dụng để truy cập đến DOM node hoặc React Element. Ngoài ra còn dùng để
lưu trữ các biến có thể mutate mà không làm re-render component

## useReducer - case study
1. JS objects or arrays as state
2. complex state transition
3. complicated business logic more suitable for a reducer function
4. different properties tied together that should be managed in one state object
5. the need to update state deep down in your component tree
6. a medium-sized application
7. need for an easier time testing it
8. need for a more predictable and maintainable state architecture

## useReducer
1. Init state: 0
2. Actions
3. Reducer
4. Dispatch