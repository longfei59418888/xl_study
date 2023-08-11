#AZURE_STORAGE_CONNECTION_STRING_QA=1234
#BUILD_ENV=qa
#export BUILD_ENV_UP=$(echo $BUILD_ENV | tr 'a-z' 'A-Z')
#echo $BUILD_ENV_UP
#export AZURE_STORAGE_CONNECTION_STRING_FILE=`eval echo '$'"AZURE_STORAGE_CONNECTION_STRING_$BUILD_ENV_UP"`
#export AZURE_STORAGE_CONNECTION_STRING=`cat $AZURE_STORAGE_CONNECTION_STRING_FILE`
#echo AZURE_STORAGE_CONNECTION_STRING
#A=B
#echo A        # A
#echo $A       # B
#echo $AB      # 空白
#echo ${A}B    # BB
#
#A=${A:=1}
#echo $A

#A=$(echo 123)
#echo $A        # 123

#BASEDIR=$(dirname "$0")
#echo $BASEDIR

'command -v ssh-agent >/dev/null || ( apt-get update -y && apt-get install openssh-client -y )'
