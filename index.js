module.exports = function({
    types: t
}) {
    return {
        visitor: {
            VariableDeclarator(path) {
                if (path.node.init != null &&
                  path.node.init.type === "BooleanLiteral" &&
                  path.node.init.value === true
                ) {
                  path.node.init = t.identifier(false);
                }
            },

            BinaryExpression(path) {
                if (path.node.operator !== "===") {

                    if (path.node.right != null &&
                        path.node.right.type === "BooleanLiteral" &&
                        path.node.right.value === true
                    ) {
                        path.node.right = t.identifier(false);
                    }

                    if (path.node.left != null &&
                        path.node.left.type === "BooleanLiteral" &&
                        path.node.left.value === true
                    ) {
                        path.node.left = t.identifier(false);
                    }
                }
            }
        }
    };
}
