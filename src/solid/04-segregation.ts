//Las clases no deben verse obligados a depender de interfaces que no usan

interface Bird
{
    eat():void;
}

interface FlyingBird
{
    fly():void;
}

interface RunningBird
{
    run():void;
}

interface SwimmergBird
{
    swin():void;
}

class Tucan implements Bird, FlyingBird
{
    public fly() {}
    public eat() {}
 
}

class Hummingbird implements Bird, FlyingBird
{
    public eat() {}
    public fly() {}
    
}

class Ostrich implements Bird, RunningBird
{
    public eat() {}
    public run() {}
}

class Penguin implements Bird, SwimmergBird{
    public eat() {}
    public run() {}
    public swin(){}
}