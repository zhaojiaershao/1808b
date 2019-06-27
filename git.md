###  git  仓库提交的流程
>git bash 要在你提交的文件夹下面运行

-初始化git仓库
git init 初始化  一个仓库只需要初始化一次
-添加文件到缓存区
 git add  文件名
 通常使用全部添加
 git add -A   -A表示all的意思  所有(git)

 -提交问价到本地仓库（自己电脑）
 git  commit -m'添加了轮播图'  
 -m表示你此次提交内容的备注
 -添加远程仓库
git remote add
origin 仓库名https：//github.com/
文件夹/1808b.git
-查看远程仓库地址
git remove -v
-推送代码到远程仓库
git push origin master
