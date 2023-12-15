### Before
___
```
  map.get("P") += add(choices);
```

출력 오류 : 
```
  ReferenceError: Invalid left-hand side in assignment
```

### After
___
```
  const currentValue = map.get("P");
  map.set("P", currentValue + add(choices));
```


해설 : 
```
The result of map.get("P") is not a reference to the original value in the map, so you can't directly modify it.
To achieve what you want, you need to get the value from the map, modify it, and then set it back in the map.
```
