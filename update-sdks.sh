#!/bin/bash
wget https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/5.3.0/openapi-generator-cli-5.3.0.jar -O openapi-generator-cli.jar
chmod u+x openapi-generator-cli.jar

# declare -a arr=("android" "cpp-qt-client" "dart" "go" "kotlin" "kotlin-spring" "java" "javascript" "php" "python" "ruby" "rust" "spring" "typescript" "typescript-jquery" "typescript-angular" "typescript-node" "typescript-nestjs")
declare -a arr=("go" "kotlin" "javascript" "typescript")

for i in "${arr[@]}"
do
   echo "$i"
  ./openapi-generator-cli.jar generate -i https://core.ssikit.walt.id/v1/api-documentation -g $i -o ./$i/core
  ./openapi-generator-cli.jar generate -i https://signatory.ssikit.walt.id/v1/api-documentation -g $i -o ./$i/signatory
  ./openapi-generator-cli.jar generate -i https://custodian.ssikit.walt.id/v1/api-documentation -g $i -o ./$i/custodian
  ./openapi-generator-cli.jar generate -i https://auditor.ssikit.walt.id/v1/api-documentation -g $i -o ./$i/auditor
  ./openapi-generator-cli.jar generate -i https://essif.ssikit.walt.id/v1/api-documentation -g $i -o ./$i/essif --skip-validate-spec
done


