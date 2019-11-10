`最大公约数`（英语：Greatest Common Divisor，简写为G.C.D.；或Highest Common Factor，简写为H.C.F.），指某几个整数共有约数中最大的一个。

求两个整数最大公约数主要的方法：

- 列举法：各自列出约数，再找出最大的公约数。
- 素因数分解法：两数各作素因数分解，然后取出共有的项乘起来。
- 短除法
- 辗转相除法（扩展版）：常使用于直观上不容易判别公约数的场合。

```bash
const gcd = (p,q)=>{
    if(q==0)return p;
    return p%q==0?q:gcd(q,p%q);
}
```
