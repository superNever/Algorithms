`质数（Prime number`），又称`素数`，指在大于1的自然数中，除了1和该数自身外，无法被其他自然数整除的数（也可定义为只有1与该数本身两个因数的数）。

代码实现：

- javascripts:

```bash
const prime = (num)=>{
    if(num<2)return false;
    for(let i = 2 ; i*i<=num;i++){
        if(num%i==0)return false;
    }
    return true;
}
```

- java

```java
public static boolean isPrime(int N){
    if(N<2) return false;
    for(int i = 2; i*i<=N;i++){
        if(N%i==0)return false;
    }
    return true;
}

```

