def of(y, rst, acc=None):
    if acc is None:
        acc = []
    ttl = sum(acc)
    if y < ttl:
        if y+1 == ttl:
            k = '+'.join(map(str, acc))
            alt[k] = alt.get(k, 0)+1
        return ttl, acc
    if len(rst) <= 0 or ttl+sum(rst) <= y:
        return 0, []
    s1, a1 = of(y, rst[1:], acc+[rst[0]])
    s0, a0 = of(y, rst[1:], acc)
    if y < s1:
        ttl, acc = s1, a1
    if y < s0 < ttl:
        ttl, acc = s0, a0
    return ttl, acc


v = sorted(map(int, """
2075
4850
486
3704
200
2250
2283
5700
754
80
519
1144
676
1000
5000
399
324
13605
4000
2850
371
130
1600
1500
300
195
287
5566
3840
1360
4546
3012
3460
173
974
3960
1000
480
268
3564
""".split()), reverse=True)
alt = {}
print('/*'+repr(of(5000, v))+'*/')
for k in sorted(alt.keys()):
    print(k+'/*'+str(alt[k])+'*/')
